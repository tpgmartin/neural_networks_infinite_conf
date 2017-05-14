// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck progress={"bar"} transition={["slide"]} transitionDuration={500} theme={theme}>
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Neural Networks
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Tom Martin <Link textColor="tertiary" href={"https://twitter.com/tpgmartin"}>@tpgmartin</Link>
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Why?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            What are we going to look at?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Feed-forward network
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Demonstrate gradient descent
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Forward propagation
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Error calculation
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Backward propagation
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Some terminology
          </Text>
        </Slide>
        <Slide bgColor="tertiary">
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
            Forward propagation
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Find value of given node
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Get weighted sum of inputs to that node
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Hadamard product
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Plug through activtion function
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Example
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image></Image>
        </Slide>
        <Slide bgColor="tertiary">
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
            Error calculation
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Use mean squared error
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            The lower the value the better
          </Text>
        </Slide>
        <Slide bgColor="tertiary">
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
            Backward propagation
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Join at Slido.com with #NeuralNetworks
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Thank You
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Tom Martin <Link textColor="tertiary" href={"https://twitter.com/tpgmartin"}>@tpgmartin</Link>
          </Text>
        </Slide>
      </Deck>
    );
  }
}
