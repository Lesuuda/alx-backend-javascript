/* eslint-disable */
import uploadPhoto from './utils';
import { createUser } from './utils';
export default async function asycUploadUser() {
    try {
        const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
        return {
            photo,
            user,
        };
    } catch (error) {
        return {
            photo: null,
            user: null,
        };
    }
}
