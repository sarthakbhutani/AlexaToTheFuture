/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk');

const LaunchIntentHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = 'Welcome  to the Future Radio SHow Skill, We are here to engage and entertain you and this responsibility was taken by our show host Robert, I am pleased to introduce you all, our favorite host, Robert <audio src="https://raw.githubusercontent.com/sarthakbhutani/AlexaNewFiles/master/audioFiles/intro1_alexa.mp3"/>,Say get news for latest super hero new or just speak with your super hero';
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .reprompt(speechOutput)
      .getResponse();
  },
};

const TalkingIntentHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
   return request.type === 'IntentRequest'
        && request.intent.name === 'TalkingIntent';
  },
  handle(handlerInput) {
    
		const start = '<audio src="soundbank://soundlibrary/scifi/amzn_sfx_scifi_alien_voice_05"/>';
		const end = '<audio src="soundbank://soundlibrary/scifi/amzn_sfx_scifi_door_open_02"/>';
    const prosodyEnd = '</prosody>'
    const prosodyStart  = '<prosody rate="120%" pitch="low" volume="x-loud">'
    var content = handlerInput.requestEnvelope.request.intent.slots.talkingTom.value
//       var content ='i ts a good day';
    const speechOutput = start +prosodyStart +content + prosodyEnd+ end;
//     const speechOutput = start + content + end;
    
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME)
      .reprompt(speechOutput)
      .getResponse();
  },
};


const NewsIntentHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'NewsIntent';
  },
  handle(handlerInput) {
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = '<audio src="'+ randomFact+'"/>';
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .reprompt(speechOutput)
      .getResponse();
  },
};


const HelpHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && (request.intent.name === 'AMAZON.HelpIntent' || request.intent.name ==='AMAZON.FallbackIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(HELP_MESSAGE)
      .reprompt(HELP_REPROMPT)
      .getResponse();
  },
};

const ExitHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && (request.intent.name === 'AMAZON.CancelIntent'
        || request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(STOP_MESSAGE)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, an error occurred.')
      .reprompt('Sorry, an error occurred.')
      .getResponse();
  },
};

const SKILL_NAME = 'Space Facts';
const GET_FACT_MESSAGE = 'Here\'s your fact: ';
const HELP_MESSAGE = 'Tell get news for latest news or else just speak with your super hero and it will repeat the ';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

const data = [
  'https://raw.githubusercontent.com/sarthakbhutani/AlexaNewFiles/master/Converted/Effect_THor_Alexa.mp3',
  'https://raw.githubusercontent.com/sarthakbhutani/AlexaNewFiles/master/Converted/footballmatch_alexa.mp3',
  'https://raw.githubusercontent.com/sarthakbhutani/AlexaNewFiles/master/Converted/hulk_snap_alexa.mp3',
  'https://raw.githubusercontent.com/sarthakbhutani/AlexaNewFiles/master/Converted/hulk_transform_alexa.mp3',
  'https://raw.githubusercontent.com/sarthakbhutani/AlexaNewFiles/master/Converted/morganstark_alexa.mp3',
  'https://raw.githubusercontent.com/sarthakbhutani/AlexaNewFiles/master/Converted/newyork_battle_alexa.mp3',
  'https://raw.githubusercontent.com/sarthakbhutani/AlexaNewFiles/master/Converted/pepper_pots_alexa.mp3',
  'https://raw.githubusercontent.com/sarthakbhutani/AlexaNewFiles/master/Converted/post_snap_alexa.mp3',
  'https://raw.githubusercontent.com/sarthakbhutani/AlexaNewFiles/master/Converted/thorwedding_alexa.mp3',
  'https://raw.githubusercontent.com/sarthakbhutani/AlexaNewFiles/master/Converted/wonder_woman_alexa.mp3',
];

const skillBuilder = Alexa.SkillBuilders.standard();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchIntentHandler,
    TalkingIntentHandler,
    NewsIntentHandler,
    HelpHandler,
    ExitHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
