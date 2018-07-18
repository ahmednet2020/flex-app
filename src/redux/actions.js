let def = {
            name:"OMG iam a hero",
            title:"add a new project",
            time:"Just now",
            img:"1"
        };
export const addActivity = (text = def) => {
	return {
		type: 'activity',
		payload: text
	}
};