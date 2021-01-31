const getTextFileContent = () => {
  const fileInputVal = document.getElementById('textFileInput');
  console.log(fileInputVal);
  const file = fileInputVal.files[0];

  const reader = new FileReader();
  reader.onload = (e) => {
    console.log(e.target.result);
  };
  reader.readAsText(file);
};

const analyzerAction = () => {
  getTextFileContent();
};

// get the button on the dom and set up an event to trigger analyzerAction
const analyzerButton = document.getElementById('analyzer');
analyzerButton.addEventListener('click', analyzerAction);
