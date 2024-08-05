import { useState } from "react";
import "./App.css";

const Survey = () => {
  const [survey, setSurvey] = useState();

  const surveyInputHandler = (event) => {
    setSurvey(event.target.value);
  };

  const clickHandler = () => {
    const surveyBtn = survey;
    if (surveyBtn) {
      alert(`Survey response: ${surveyBtn}`);
    }
  };

  return (
    <div>
      <lable for="survey">Take the survey:</lable>
      <textarea
        id="survey"
        rows={4}
        cols={40}
        onChange={surveyInputHandler}
      ></textarea>
      <button onClick={clickHandler}>Submit Survey</button>
    </div>
  );
};

const RecipeForm = () => {
  const [recipeInput, setRecipeInput] = useState("");
  const [recipeSteps, setRecipeSteps] = useState([]);

  const handleRecipeInput = (event) => {
    setRecipeInput(event.target.value);
  };

  const clickHandler = () => {
    const steps = recipeInput.split(". ").filter((step) => step.trim() !== "");
    setRecipeSteps(steps);
  };

  return (
    <div>
      <label for="recipe">Enter your recipe:</label>
      <textarea
        id="recipe"
        rows={4}
        cols={40}
        onChange={handleRecipeInput}
      ></textarea>
      <button onClick={clickHandler}>Save Recipe</button>
      {recipeSteps.length > 0 && (
        <div>
          <ol>
            {recipeSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

const Diary = () => {
  const [diary, setDiary] = useState();
  const [displayDiary, setDisplayDiary] = useState();

  const diaryInputHandler = (event) => {
    setDiary(event.target.value);
  };

  const diaryBtnHandler = () => {
    setDisplayDiary(diary);
  };

  return (
    <div>
      <label for="diaryInput">Write your diary entry:</label>
      <textarea
        id="diaryInput"
        rows={4}
        cols={40}
        onChange={diaryInputHandler}
      ></textarea>
      <button onClick={diaryBtnHandler}>Save Diary Entry</button>
      {displayDiary && (
        <p>
          <em>Diary entry saved: {displayDiary}</em>
        </p>
      )}
    </div>
  );
};

const Story = () => {
  const [story, setStory] = useState();
  const [displayStory, setDisplayStory] = useState();

  const storyInputHandler = (event) => {
    setStory(event.target.value);
  };

  const storyBtnHandler = () => {
    setDisplayStory(story);
  };

  return (
    <div>
      <label for="storyInput">Share your story:</label>
      <textarea
        id="storyInput"
        rows={4}
        cols={40}
        onChange={storyInputHandler}
      ></textarea>
      <button onClick={storyBtnHandler}>Submit Story</button>
      {displayStory && <p>Your story: {displayStory}</p>}
    </div>
  );
};

const ItemList = () => {
  const [itemInput, setItemInput] = useState("");
  const [itemList, setItemList] = useState([]);

  const handleItemInput = (event) => {
    setItemInput(event.target.value);
  };

  const clickItemHandler = () => {
    const lists = itemInput.split(", ").filter((list) => list.trim() !== "");
    setItemList(lists);
  };

  return (
    <div>
      <label for="itemList">Enter a list of items:</label>
      <textarea
        id="itemList"
        rows={4}
        cols={40}
        onChange={handleItemInput}
      ></textarea>
      <button onClick={clickItemHandler}>Display Items</button>
      {itemList.length > 0 && (
        <div>
          <ul>
            {itemList.map((list, index) => (
              <li key={index}>{list}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <main>
      <h1>Text Area Programs</h1>
      <Survey />
      <br />
      <RecipeForm />
      <br />
      <Diary />
      <br />
      <Story />
      <br />
      <ItemList />
    </main>
  );
}
