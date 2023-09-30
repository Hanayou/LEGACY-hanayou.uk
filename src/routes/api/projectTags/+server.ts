import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import { db } from "$lib/firebase";
import { getDocs, collection } from "firebase/firestore";

export const GET: RequestHandler = async () => {
    let tags = await getAllTags();   

    // Headers
    const responseInit : ResponseInit = {
        headers : {
            'cache-control' : 'public, max-age=3600' // Cache for one hour
        }
    }

    return json(tags, responseInit);
};

// Returns all tags from the database
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