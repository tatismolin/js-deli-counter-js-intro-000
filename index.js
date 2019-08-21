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
        var text = "";
        for (var i = 0; i < katzDeliLine.length; i++) {
            text = text + `${i + 1}. ${katzDeliLine[i]}, `
        }
        return "The line is currently: " + text.slice(0, text.length - 2)
    }
}
