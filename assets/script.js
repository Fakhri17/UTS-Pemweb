String.prototype.EntoAr = function () {
    return this.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);
  };
  function changeToArabic(number) {
    return number.toString().EntoAr();
  }