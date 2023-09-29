import type { PageServerLoad } from './$types';
import { db } from "$lib/firebase";
import { getDocs, collection, where, query, orderBy } from "firebase/firestore";

export const load = (async ( url ) => {
    let projects = await getAllProjects();
    let tags =  await getAllTags();
    return {
        projects: projects,
        tags: tags
    };
}) satisfies PageServerLoad;

// Returns all projects from the database
async function getAllProjects(): Promise<App.Project[]> {
    const projects: App.Project[] = [];
    // Only return project where 'published' is set to true
    const q = query(collection(db, "projects"),
    where("published", "==", true), orderBy("endDate", "desc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        projects.push({
            id: doc.id,
            title: doc.data().title,
            summary: doc.data().summary,
            content: doc.data().content,
            startDate: doc.data().startDate.toDate(),
            endDate: doc.data().endDate.toDate(),
            published: doc.data().published,
            tags: doc.data().tags
        });
    });
    return projects;
}

async function getAllTags(): Promise<App.Tags[]> {
    const tags: App.Tags[] = [];

    const querySnapshot = await getDocs(collection(db, "projectTags"));
    querySnapshot.forEach((doc) => {
        tags.push({
            id: doc.id,
            displayName: doc.data().displayName,
            category: doc.data().category
        });
    });
    return tags;
} 

export const actions = {
    default: async ({ cookies, request }) => {
        // Extract Data
        const data = await request.formData();
        const search = data.get('search') as string;
        
        try {
            let res = await getAllProjects();
            return {
                projects: res,
                search: search
            };
        } catch (e) {
            return "FAILED!";
        }
    }
};


