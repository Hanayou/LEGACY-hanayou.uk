import type { PageServerLoad } from './$types';
import { db } from "$lib/firebase";
import { getDocs, collection, doc } from "firebase/firestore";
import { QueryDocumentSnapshot, QuerySnapshot } from 'firebase-admin/firestore';

export const load = (async ( url ) => {
    return {};
}) satisfies PageServerLoad;

interface Project {
    id: string;
    title?: string;
    summary?: string;
    startDate?: Date;
    endDate?: Date;
    content?: string;
    tags?: [];
}

// Returns all projects from the database
async function getAllProjects(): Promise<string> {
    const querySnapshot = await getDocs(collection(db, "projects"));
    
    console.log(querySnapshot.docs[0].data().title)
    return querySnapshot.docs[0].data().title;
}


export const actions = {
    default: async ({ cookies, request }) => {
        // Extract Data
        const data = await request.formData();
        console.log(data);
        
        try {
            let test: string;
            test = await getAllProjects()
            return {
                test: test
            }
        } catch (e) {
            return "FAILED!";
        }
    }
};


