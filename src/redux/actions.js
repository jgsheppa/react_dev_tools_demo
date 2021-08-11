import { HOME, ADMIN, NOTIFICATIONS } from './actionTypes';

export const loadSkills = (skills) => ({
  type: HOME,
  payload: skills,
});

export const addSkill = (newSkill) => ({
  type: ADMIN,
  payload: newSkill,
});

export const deleteSkill = (skill) => ({
  type: NOTIFICATIONS,
  payload: skill,
});
