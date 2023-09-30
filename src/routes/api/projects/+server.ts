import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import { db } from "$lib/firebase";
import { getDocs, collection, where, query, orderBy } from "firebase/firestore";

export const GET: RequestHandler = async () => {
    let projects = await getAllProjects();

    // Headers
    const responseInit : ResponseInit = {
        headers : {
            'cache-control' : 'public, max-age=3600' // Cache for one hour
        }
    }

    return json(projects, responseInit);
};

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



