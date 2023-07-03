import $ from "jquery";

function ScrollAni() {
  // SCROLL EVENT
  $(window).scroll(() => {
    let height = $(window).scrollTop();
    console.log(height);
    let y = (-1 / 500) * height + 115 / 50;
    $(".card-box").eq(0).css("opacity", y);

    let z = (-1 / 5000) * height + 565 / 500;
    $(".card-box").eq(0).css("transform", `scale( ${z} )`);
  });

  return (
    <>
      <div class="card-background mt-2">
        <h1 className="mb-5">From Baby to Adult</h1>
        <div className="card-box">
          <img
            src="https://cdn.pixabay.com/photo/2014/10/27/19/18/baby-shoes-505471_1280.jpg"
            alt=""
          />
        </div>
        <div className="card-box">
          <img
            src="https://cdn.pixabay.com/photo/2015/02/14/02/18/marriage-636018_1280.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default ScrollAni;
