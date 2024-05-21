const dateFormatter = (timestamp) => {
    // Options to format specific fields of the timestamp
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    };

    // Create a new formatted date
    const newFormat = new Date(timestamp).toLocaleString('en-US', options);
    
    // Find index of comma after year to update the format by removing the comma and adding 'at'
    const indexAddAt = newFormat.indexOf(',', 7);
    let updatedFormat = newFormat.substring(0, indexAddAt) + ' at' + newFormat.substring(indexAddAt + 1);

    // Find index of whitespace before day and comma after day to add an ordinal to it
    const indexWhitespace = updatedFormat.indexOf(' ');
    const indexAddOrdinal = updatedFormat.indexOf(',');
    let ordinalConverter = updatedFormat.substring(indexWhitespace + 1, indexAddOrdinal);

    // If statement cases to determine which ordinal to add
    if (ordinalConverter === "1" || ordinalConverter === "21" || ordinalConverter === "31") {
        ordinalConverter = ordinalConverter + "st";
    }

    else if (ordinalConverter === "2" || ordinalConverter === "22") {
        ordinalConverter = ordinalConverter + "nd";
    }

    else if (ordinalConverter === "3" || ordinalConverter === "23") {
        ordinalConverter = ordinalConverter + "rd";
    }

    else {
        ordinalConverter = ordinalConverter + "th";
    }

    // Update the formatted date string with the ordinal and return it
    updatedFormat = updatedFormat.substring(0, indexWhitespace + 1) + ordinalConverter + updatedFormat.substring(indexAddOrdinal);
    return updatedFormat;
}

module.exports = { dateFormatter };
