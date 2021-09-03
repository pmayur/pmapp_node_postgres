import { Story } from "../entities/Story";
import { HTTPBadRequestError } from "../util/ErrorService";
import ValidatorService from "../util/ValidatorService";

class AdminService {
    async updateStory(body: any, storyId: string) {
        const {
            summary,
            description,
            type,
            complexity,
            status,
            workingHrsRequired,
        } = body;
        const story = await Story.findOne({id: storyId});
        if(!story) {
            throw new HTTPBadRequestError("Invalid Story Id");
        }
        if(summary) {
            story.summary = summary;
        }
        if(description) {
            story.description = description;
        }
        if(type) {
            story.type = ValidatorService.validateType(type);
        }
        if(status) {
            story.status = ValidatorService.validateStatus(status);
        }
        if(complexity) {
            story.complexity = ValidatorService.validateComplexity(complexity);
        }
        if(workingHrsRequired){
            story.workingHrsRequired = parseInt(workingHrsRequired);
        }
        return await story.save();
    }

    getAllStories() {
        const stories = Story.find();
        return stories;
    }
}
export default new AdminService();
