import { Story } from "../entities/Story";
import { CreateStoryDTO } from "../util/dto";

class StoryService {
    async createStory(storyDetails: CreateStoryDTO) {
        let story = new Story();
        story = Object.assign(story, storyDetails);
        return await story.save();
    }
}
export default new StoryService();
