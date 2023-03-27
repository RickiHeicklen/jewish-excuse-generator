// List of apologies to go at the beginning of the line
const apologies = ["Sorry, I can't make it to ", 
                   "My apologies, I'm going to have to miss ", 
                   "I'm actually busy today and won't be able to attend ",
                   "Unfortunately, I won't be able to make it to ",
                   "I'm really sad I can't be at "];

// List of excuses
// Feel free to add more via this form: https://docs.google.com/forms/d/e/1FAIpQLSej4lNL2y58bcKcxq5c1iXIxPz6xmGN-BNMeFVAHz0aA3h_wg/viewform
// or directly to this doc: https://docs.google.com/spreadsheets/d/1w_1PJABP2-W1vukhsu3W71lppu_iYgy6PFTyBsRK3vs/edit#gid=0
const excuses = ["and I have my nephew's bar mitzvah", "so I need to check the eruv", "and my bubbie would kill me if I missed the seder", "so I need to work on my costume", "and I promised the Rabbi I would do Hagbah", "and the chulent doesn't cook itself", "and there's a minyan in the back of the hardware store, nine men waiting for one more", "and I ate too many sufganiyot", "and there's a bris milah I need to officiate", "and I'm part of the chevre kadisha", "so I have to finish all the chametz in the house", "and I'm late for my mikvah appointment", "so we're having night seder all day ", "and I need to get my lashon hara in before elul", "so we're having a tisch ", "which as you know is my goldfish's yartzheit ", "and I need to take down the sukkah decorations", "the traditional jewish holiday of transit systems", "the beginning of tabernacle season", "which is a fast day for second-borns ", "so we're going to the Uncle Moishy concert", "so I'm making a siyyum on the apocrypha ", "which has unique kabbalistic significance that I'm not allowed to tell you about ", "the birth of weird al yankovic", "so I have to say long long tachnun", "which is yom haatzmaut sheni shel galuyot", "and I have to [march in] [protest] the Israeli Day Parade", "bli ayin hara ken yehi ratzon ", "and I need to say a kel maleh for the democratic process", "the day the miami boys choir went viral on tiktok", "and I have to beat a willow branch against the ground in a hut ", "so I have to cook five meals before the sun sets", "so I have to organize my synagogue's treyfe banquet", "and I have to attend a summit on antisemitism on college campuses", "the ingathering of the exiles", "the Jewish equivalent of St. Patrick's Day", "i.e. Thanksgivukkah", "erev erev nittel nacht", "and I need to make an eruv tavshilin", "and there's an election in Israel", "our fourth to last chance to reverse the evil decree before our fate is sealed", "which is one of the days that religious Jews study Daf Yomi"];

// Get the user input and display the random string
function generateRandomString() {
  const button = document.getElementById("user-input");
  var userInput = document.getElementById("user-input").value;
  const googleFormText = document.getElementById("googleForm");
  googleFormText.style.display = "block";

  if (userInput === '') {
      userInput = "[that thing I committed to at a different point in time]";
  }
  const hebrewDate = getHebrewDate()
  const randomApology = apologies[Math.floor(Math.random() * apologies.length)];
  const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];
  const output = `\n${randomApology} ${userInput}. It's ${hebrewDate}, ${randomExcuse}.`;
  document.getElementById("output").innerHTML = output;
}
