import { User } from "../entities";
import { Story } from "../entities/Story";
import { CreateStoryDTO } from "../util/dto";

class StoryService {
    async getAllStories(userId: string) {
        const user = await User.findOne(
            { id: userId },
            { relations: ["stories"] }
        );
        return user?.stories;
    }
    async createStory(storyDetails: CreateStoryDTO) {
        let story = new Story();
        story = Object.assign(story, storyDetails);
        const user = await User.findOne({id: storyDetails.userId});
        if(user){
            story.user = user;
        }
        return await story.save();
    }
}
export default new StoryService();
