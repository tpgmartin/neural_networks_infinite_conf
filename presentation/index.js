// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  CodePane,
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
  hiddenLayerHighlighted: require("../assets/hidden_layer_highlighted.png"),
  linearExampleNoHiddenLayer: require("../assets/linear_example_no_hidden_layer.png"),
  linearExampleWithHiddenLayer: require("../assets/linear_example_with_hidden_layer.png"),
  multipleInputsToSingleOutput: require("../assets/multiple_inputs_to_single_output.png"),
  singleInputToSingleOutput: require("../assets/single_input_to_single_output.png"),
  threeLayerNetwork: require("../assets/three_layer_network.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#2D2D2D"
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
            From scratch
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            From scratch*
          </Text>
          <Text margin="10px 0 0" textColor="secondary" size={1} bold>
            <Link textColor="quartenary" href={"https://github.com/nicolaspanel/numjs"}>numjs</Link>
          </Text>
        </Slide>
        <Slide bgColor="tertiary">
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
            Overview
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Investigate a learning problem
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Determine correct response to traffic lights
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Build feed-forward network
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Demonstrate gradient descent
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Show how this is set up
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Work through three stages:
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            1. Forward propagation
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            2. Error calculation
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            3. Backward propagation
          </Text>
        </Slide>
        <Slide bgColor="tertiary">
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
            Introduction
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Web developer <Link textColor="tertiary" href={"https://twitter.com/OpenTableTechUK"}>@OpenTable</Link>
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            My machine learning jounery started in 2016
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            What are we trying to acheive with a neural network?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Learn how to determine output for given input
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Supervised learning
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Train by matching inputs to known outputs
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            "Learning"
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Minimise network error
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Find correlation between inputs
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Adjust network in response to error calculation
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Correlations are where the magic happens
          </Text>
        </Slide>
        <Slide bgColor="tertiary">
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
            Setup
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Example we are going to follow
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Traffic lights
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Input will be arrays of length 3
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            e.g. [1, 0, 1] corresponds to green and red lights turning on
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Output value will be 1 or 0
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            "walk" or "don't walk'"
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Input layer will be three nodes
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Output layer will be one node
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.multipleInputsToSingleOutput} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Strength of relationship given by a "weight"
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Find output for single input node
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.multipleInputsToSingleOutput}/>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            output = input * weight
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            General case of multiple inputs
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Get weighted sum of inputs to that node
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Dot product
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Measure of agreement
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Increasing dot product == increasing "measure of agreement"
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Where do weights come from?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Randomly pick weights
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Limiting factor: how quickly network learns
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Sufficient to use normal distribution with mean 0, standard deviation 1
          </Text>
        </Slide>
        <Slide bgColor="quartenary" notes="">
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/weight_initialisation.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            But somethings missing ...
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Want nonlinear behaviour
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Want to find new correlations between input nodes
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Add hidden layer
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Hidden layer creates intermediate correlation
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Choose number of layers and nodes that perform best
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Final network will have hidden layer of 4 nodes
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            ... still linear ...
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.threeLayerNetwork} />
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.linearExampleWithHiddenLayer} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            H = 0.4 * A + 0.8 * B + 0.6 * C
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.linearExampleWithHiddenLayer} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            O = 0.5 * (0.4 * A + 0.8 * B + 0.6 * C)
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            O = 0.2 * A + 0.4 * B + 0.3 * C
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.linearExampleNoHiddenLayer} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Activation function creates nonlinearities
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Relu function
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            If input &#60; 0 then return 0
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Else return input
          </Text>
        </Slide>
        <Slide bgColor="quartenary" notes="">
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/relu.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide bgColor="tertiary">
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
            Forward propagation
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Iteratively find output for given input
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Layer by layer, node by node
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            At each layer find dot product of weights with input at that layer
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            At hidden layer, plug through activation function
          </Text>
        </Slide>
        <Slide bgColor="quartenary" notes="">
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/forward_propagation.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide bgColor="tertiary">
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
            Error calculation
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Why do we measure error?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Learning is just reducing the error
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Many different ways to quantify this
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Use mean squared error
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            nj.power((nj.subtract(outputLayer, walkVsStop.slice([i, i + 1]))), 2)
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            error = (prediction - target) ** 2
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Error value is retained for course of iteration
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            The lower the value the better
          </Text>
        </Slide>
        <Slide bgColor="quartenary" notes="">
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/error.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide bgColor="tertiary">
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
            Backward propagation
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Error tells us how well we're doing
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            How do we improve this?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Can only adjust weights
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Found out how wrong/how right previous guess was
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Determine amount to adjust weights in previous layer
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Work Backwards, layer by layer
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Possible divergence of weight updates
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Weight update scales with input value
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Could be very large, even for a small error
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Learning rate, &alpha;
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Just choose &alpha; that works for us
          </Text>
        </Slide>
        <Slide bgColor="tertiary">
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
            Run-through
          </Text>
        </Slide>
        <Slide bgColor="tertiary">
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
            Recap
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
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Join at sli.do with <Link textColor="tertiary" href={"https://app.sli.do/?search=NeuralNetworks"}>#NeuralNetworks</Link>
          </Text>
        </Slide>
      </Deck>
    );
  }
}
