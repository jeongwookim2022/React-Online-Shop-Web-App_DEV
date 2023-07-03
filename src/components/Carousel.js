import Carousel from "react-bootstrap/Carousel";
import bg from "../img/bg.png";

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={`${bg}`} alt="First slide" />
        <Carousel.Caption>
          <h3>Welcome to ShoeTockholm</h3>
          <p>Hej, 안녕하세요, hola, hallo, hey, bonjour.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2016/03/27/22/16/fashion-1284496_1280.jpg"
          alt="Second slide"
          style={{ maxHeight: "550px" }}
        />
        <Carousel.Caption>
          <h3>Asian Edition</h3>
          <p>
            Korean, Japanese, Chinese style shoes are ready here. Find your new
            tastes.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2018/05/06/03/39/woman-3377839_1280.jpg"
          alt="Third slide"
          style={{
            height: "auto",
            maxHeight: "550px",
          }}
        />
        <Carousel.Caption>
          <h3>Swedish street style</h3>
          <p>Swedish street style shoes are ready here in ShoeTockholm.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
