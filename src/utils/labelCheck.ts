export const labelCheck = (currentScore: number) => {
  if (currentScore <= 20) {
    return "Muggle";
  } else if (currentScore > 20 && currentScore <= 30) {
    return "Squib";
  } else if (currentScore > 30 && currentScore <= 40) {
    return "Wizard";
  } else if (currentScore > 40 && currentScore <= 50) {
    return " Dark Wizard";
  }
};
