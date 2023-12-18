import { Client, Account, ID, Databases, Avatars, Storage, Query } from "appwrite";

const client = new Client();

const account = new Account(client);
const databases = new Databases(client);
const avatars = new Avatars(client);
const storage = new Storage(client);


const databaseId = "656deb57e87f7b6ed17c";
const collectionId = "656deb6691f61b692204";
const bucketId = "656dee39f12d94c04ef8";

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('656dbe9fcef15b358573') // Your project ID
    // .setProject('64f7631f9bb9b707a45b') // Your project ID
    ;


// Users functions //

export const getConnectedAccount = async () => {
    try {
        const promise = await account.get();
        return promise
    } catch (error) {
        return error
    }

}

export const createUser = async ({ domaine, city, municipality, phone,
    precise_location, firstname, email, password, name, }) => {

    name = name + ' ' + firstname

    try {
        const user_id = await createAccount(email, password, name)
        const attributes = {
            domaine, city, user_id, municipality,
            phone, precise_location, name,
        }

        if (user_id) {
            const user_info = await userInfos(attributes)
            return {user_infos:user_info, user_id: user_id}
        }
    } catch (error) {
        return error
    }

}

export const userInfos = async ({
    domaine, city, user_id, municipality,
    phone, precise_location, name }) => {

    try {
        const promise = await databases.createDocument(databaseId, collectionId, ID.unique(), {
            domaine, city, user_id, municipality,
            phone, precise_location, name,
        });
        console.log(promise);
        return promise
    } catch (error) {
        return error
    }

}

export const createAccount = async ( email, password, name ) => {
    try {
        const promise = await account.create(ID.unique(), email, password, name);
        return promise.$id
    } catch (error) {
        return error
    }
}

export const checkUser = async () => {
    try {
        const promise = JSON.parse(localStorage.getItem('cookieFallback'))
        if (promise) {
            return true
        }
        return false
    } catch (error) {
        return error
    }

}

export const logging = async ({ email, password }) => {
    try {
        const promise = await account.createEmailSession(email, password);
        // const promise = await account.createEmailSession('email@example.com', 'toto1234');
        return promise.userId
    } catch (error) {
        return error
    }
}

export const listUsers = async () => {
    try {
        const { documents } = await databases.listDocuments(databaseId, collectionId);
        return documents
    } catch (error) {
        return error
    }

}

export const getOneUser = async (id) => {
    try {
        const promise = await databases.listDocuments(databaseId, collectionId, [
            Query.equal('user_id', [id])
        ])
        return promise
    } catch (error) {
        return error
    }

}

export const deleteUser = async () => {
    try {
        const user = await getConnectedAccount()
        const promise = databases.deleteDocument(databaseId, collectionId, user.user_id);
        // const promise = await databases.listDocuments(databaseId, collectionId, [
        //     Query.equal('user_id', [id])
        // ])
        return promise
    } catch (error) {
        return error
    }

}

// Users functions //


// Document functions //
export const updateDocument = async ({ avatar, docId }) => {
    // console.log(avatar);
    try {
        const promise = await databases.updateDocument(databaseId, collectionId, docId, {avatar})
        console.log(promise);
        return promise.$id
    } catch (error) {
        return error
    }

}

// Document functions //


// Avatars functions //

export const createAvatar = async (file) => {
    try {
        const promise = await storage.createFile(bucketId, ID.unique(), file);
        console.log(promise);
        return promise.$id
    } catch (error) {
        return error
    }

}

export const getAvatar = async (file_id) => {
    try {
        const promise = await storage.getFilePreview(bucketId, file_id);
        console.log(promise);
        return promise.href
    } catch (error) {
        return error
    }

}

export const UpdateAvatar = async (file_id) => {
    try {
        const promise = await storage.updateFile(bucketId, file_id);
        console.log(promise);
    } catch (error) {
        return error
    }

}

export const deleteAvatar = async (file_id) => {
    try {
        const promise = await storage.deleteFile(bucketId, file_id);
        console.log(promise);
    } catch (error) {
        return error
    }

}

// Avatars functions //