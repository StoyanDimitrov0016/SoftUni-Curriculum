function food(input) {
    let food = input[0];
    let type = "";
    switch (food) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
            type = "fruit";
            break;

        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot":
            type = "vegetable"

            break;
        default:
            type = "unknown";
            break;
    }
    console.log(type)
}
food(["tomato"]);