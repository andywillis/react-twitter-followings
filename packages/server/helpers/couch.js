import nano from 'nano';

const couch = nano('http://admin:admin@localhost:5984');

export default couch;
