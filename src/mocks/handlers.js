// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

const mission1 = { mission_id: 'missionid1', mission_name: 'missionname1', description: 'missiondescription1' };
const mission2 = { mission_id: 'missionid2', mission_name: 'missionname2', description: 'missiondescription2' };
const mission3 = { mission_id: 'missionid3', mission_name: 'missionname3', description: 'missiondescription3' };

const rocket1 = {
  id: 'missionid1', name: 'missionname1', description: 'missiondescription1', type: 'rocket', flickr_images: ['img'],
};
const rocket2 = {
  id: 'missionid2', name: 'missionname2', description: 'missiondescription2', type: 'rocket', flickr_images: ['img'],
};
const rocket3 = {
  id: 'missionid3', name: 'missionname3', description: 'missiondescription3', type: 'rocket', flickr_images: ['img'],
};

const dataMissions = [mission1, mission2, mission3];
const dataRockets = [rocket1, rocket2, rocket3];

const handlersMissions = rest.get('https://api.spacexdata.com/v3/missions', (req, res, ctx) => res(
  ctx.json(dataMissions),
));

const handlersRockets = rest.get('https://api.spacexdata.com/v4/rockets', (req, res, ctx) => res(
  ctx.json(dataRockets),
));

export { handlersMissions, handlersRockets };
