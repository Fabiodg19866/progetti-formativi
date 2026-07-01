var Color;
(function (Color) {
    Color[Color["Rosso"] = 4] = "Rosso";
    Color[Color["Verde"] = 5] = "Verde";
    Color[Color["Blu"] = 6] = "Blu";
    Color[Color["Rosa"] = 7] = "Rosa";
    Color[Color["Bianco"] = 8] = "Bianco";
})(Color || (Color = {}));
var colors = Color.Blu;
console.log(colors);
