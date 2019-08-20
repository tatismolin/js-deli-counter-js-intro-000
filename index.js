
function takeANumber(katzDeliLine, newName) {
    katzDeliLine.push(newName);
    return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
    if (katzDeliLine.length === 0) {
        return `There is nobody waiting to be served!`;
    } else {
        var currentlyServingName = `Currently serving ${katzDeliLine[0]}.`;
        katzDeliLine.shift();
        return currentlyServingName;

    }
}

function currentLine(katzDeliLine) {
    if (katzDeliLine.length === 0) {
        return "The line is currently empty."
    } else {
        var beginText = "The line is currently: ";
        var wholeText = "";
        var i = 0;
        for (i = 0; i < katzDeliLine.length; i++) {
            wholeText = wholeText + `${i + 1}. ${katzDeliLine[i]}, `
        }
        wholeText = beginText + wholeText;
        return wholeText.slice(0, wholeText.length - 2);
    }
}
