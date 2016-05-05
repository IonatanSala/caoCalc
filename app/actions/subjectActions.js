import { ADD_SUBJECT } from './actionTypes';

// adding a new subject
export const addSubject = (subject) => {
  return {
    type: ADD_SUBJECT,
    subject: {
      id: Date.now(),
      subject: subject.subject,
      level: subject.level,
      grade: subject.grade,
      points: 10
    }
  }
}
