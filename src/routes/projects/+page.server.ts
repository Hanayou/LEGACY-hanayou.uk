import type { PageServerLoad } from './$types';
import { db } from "$lib/firebase";
import { getDocs, collection } from "firebase/firestore";

export const load = (async ( url ) => {
    let res = await getAllProjects();
    return {
        projects: res
    };
}) satisfies PageServerLoad;

// Returns all projects from the database
async function getAllProjects(): Promise<App.Project[]> {
    const projects: App.Project[] = [];
    const querySnapshot = await getDocs(collection(db, "projects"));
    querySnapshot.forEach((doc) => {
        projects.push({
            id: doc.id,
            title: doc.data().title,
            summary: doc.data().summary,
            content: doc.data().content,
            startDate: doc.data().startDate.toDate(),
            endDate: doc.data().endDate.toDate(),
            published: doc.data().published
        });
    });
    return projects;
}

export const actions = {
    default: async ({ cookies, request }) => {
        // Extract Data
        const data = await request.formData();
        const search = data.get('search') as string;
        console.log(data);
        
        try {
            let res = await getAllProjects()
            return {
                projects: res,
                search: search
            };
        } catch (e) {
            return "FAILED!";
        }
    }
};


