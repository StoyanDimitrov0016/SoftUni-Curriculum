exports.getDifficultyLevelViewData = function (difficultyLevel) {
    const levels = [
        'Very Easy',
        'Easy',
        'Medium (Standard 3x3)',
        'Intermediate',
        'Expert',
        'Hardcore'];

    const options = levels.map((level, i) => ({
        title: `${i + 1} - ${level}`,
        value: i + 1,
        selected: (i + 1) === Number(difficultyLevel)
    }));

    return options;
}