/**
 * Créer ici le projet « Hello You ».
 */

const userFirstName = window.prompt("Hey ! Quel est votre prénom ?");
const userLastName = window.prompt("Hey ! Quel est votre nom?");
const currentYear = new Date();
const userYear = window.prompt("Hey ! Tu es né en quelle année?");
const userMonth = window.prompt("Hey ! Tu es né quel mois?");
const userDay = window.prompt("Hey ! Tu es né quel jour?");
const userYAge = currentYear.getFullYear() - userYear;
const userMAge = currentYear.getMonth() - userMonth;
const userDAge = currentYear.getDay() - userDay;
const greetingMsg = `Salut  ${userFirstName} ${userLastName} tu as ${userYAge};
console.log(greetingMsg);
