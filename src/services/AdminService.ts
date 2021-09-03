import { Story } from "../entities/Story";

class AdminService {
    getAllStories() {
        const stories = Story.find();
        return stories;
    }

}
export default new AdminService();
