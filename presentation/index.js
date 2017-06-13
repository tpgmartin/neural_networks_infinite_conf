// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Heading,
  Image,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Table,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
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
  multipleInputsToSingleOutputWithWeights: require("../assets/multiple_inputs_to_single_output_with_weights.png"),
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
            Determine correct ouput of XOR gate
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Build feed-forward network
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Gonna get deep
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Show how this is set up
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Implement gradient descent
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
            "Learn, do, learn, teach"
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
            Training data
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Train by matching inputs to known outputs
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Move to test case
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            "Learn"?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Minimise network error
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Adjust network in response to error calculation
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Equivalently ...
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Find correlation between inputs
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Correlations are where the magic happens
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Input nodes are not independent
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
            XOR
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderItem>A</TableHeaderItem>
                <TableHeaderItem>B</TableHeaderItem>
                <TableHeaderItem>A XOR B</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem>0</TableItem>
                <TableItem>0</TableItem>
                <TableItem>0</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>0</TableItem>
                <TableItem>1</TableItem>
                <TableItem>1</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>1</TableItem>
                <TableItem>0</TableItem>
                <TableItem>1</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>1</TableItem>
                <TableItem>1</TableItem>
                <TableItem>0</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Input will be arrays of length 2
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Output value will be 1 or 0
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Network is made of layers and nodes
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Nodes are our "neurons"
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Node has value updated in forward propagation
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Layer is set of nodes with common inputs
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Input layer will be two nodes
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
            How do we get output?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Weight == strength of relationship
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Find output for given input node
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
          <Image src={images.multipleInputsToSingleOutputWithWeights}/>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Get weighted sum of inputs to that node
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            O = 0.4 * A + 0.6 * B
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            O = 0.4 * A + 0.6 * B<br/>
            Important: This is linear
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
            All examples will be single input node to single ouput node
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Replace "multiplication" with "dot product"
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
            Sufficient to use normal distribution
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Mean 0, standard deviation 1
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Also choose weights between -1 and +1
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Mostly just to make things simple
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Everything comes back to how quickly network learns
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
            Have a neural network
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            We need to go deeper
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Want to find new correlations between input nodes
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Why?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            AND gate
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderItem>A</TableHeaderItem>
                <TableHeaderItem>B</TableHeaderItem>
                <TableHeaderItem>A AND B</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem>0</TableItem>
                <TableItem>0</TableItem>
                <TableItem>0</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>0</TableItem>
                <TableItem>1</TableItem>
                <TableItem>0</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>1</TableItem>
                <TableItem>0</TableItem>
                <TableItem>0</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>1</TableItem>
                <TableItem>1</TableItem>
                <TableItem>1</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            This can be solved with a linear neural network
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Back to XOR
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Something's missing
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Need nonlinear behaviour
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
            Correlation == some configuration of nodes produce an output
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Choose number of layers and nodes that perform best
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Final network will have hidden layer of 3 nodes
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.threeLayerNetwork} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            ... still linear
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
            H = 0.4 * A + 0.6 * C
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.linearExampleWithHiddenLayer} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            O = 0.5 * (0.4 * A + 0.6 * C)
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            O = 0.2 * A + 0.3 * C
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.linearExampleNoHiddenLayer} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            How to solve this?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Activation function introduces nonlinearities
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Determines if node is "on" or "off"
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Puts the neural in neural networks
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            relu function
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            if input &#60; 0 then return 0
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            else return input
          </Text>
        </Slide>
        <Slide bgColor="quartenary" notes="">
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/relu.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Have deep learning neural network!
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Can implement gradient descent
          </Text>
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
            At each layer find dot product of weights with input to that layer
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
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Network generates output
          </Text>
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
            How do we know network output is any good?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Want network to learn training set
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Learning is just reducing the error
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            How do we qualify error?
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
            error = (prediction - target) ** 2
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            *This is an assumption
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            But general idea still holds
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            error &ge; 0
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            The lower the value the better
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Error value is retained for course of single iteration
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
            What can we do?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Can only adjust weights
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Determine amount to adjust weights in previous layer
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Back propagation is a process of error attribution
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            How much did given weight contribute to final error?
          </Text>
        </Slide>
        <Slide bgColor="tertiary">
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
            &lt;aside&gt;
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Find minimum of error function
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Error is measure of how well network is performing
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Choose largest change in error function with each iteration
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            This is the derivative of error function
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Gradient at given point
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            For output layer this is easy
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            error = (prediction - target) ** 2
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            (parabolic curve)
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            outputDelta ~ prediction - target
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Convergence to local minimum is guaranteed
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Local minimum is our goal weight
          </Text>
        </Slide>
        <Slide bgColor="tertiary">
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
            &lt;/aside&gt;
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Work Backwards, layer by layer
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Found output layer delta
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            What is change to weights connecting hidden and output layers?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            weightUpdate = input * outputDelta
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            What about the input-hidden layer weights?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.threeLayerNetwork} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Find derivative of output function at hidden layer node
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Change to hidden layer node complicated by activation function
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Found outputDelta was just derivative of output function
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            ... some calculus later ...
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            hiddenDelta = outputDelta * weight_h_o * relu'(input * weight_i_h)
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            How to think about relu'?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Said backward propagation is about error attribution
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            relu gave us a weight &ge; 0
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            So either weight did or didn't contribute to error
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            "did" == 1, "didn't" == 0
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            hiddenDelta = outputDelta * weight_h_o
            or
            hiddenDelta = 0
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Finally update weights
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            weightDelta = input * delta
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Not done yet
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
            weightDelta = input * delta
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Could be very large, even for a small error
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            (Example of divergent weight update)
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Learning rate, &alpha;
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            weight -= alpha * weightDelta
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Just choose &alpha; that works for us
          </Text>
        </Slide>
        <Slide bgColor="quartenary" notes="">
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/learning_rate.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide bgColor="tertiary">
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
            Run-through
          </Text>
        </Slide>
        <Slide bgColor="quartenary" notes="">
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/network_1.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide bgColor="quartenary" notes="">
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/network_2.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide bgColor="tertiary">
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
            Recap
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Matched network to learning problem
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Created a neural network with input, ouput and single hidden layers
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Showed why we need hidden layer
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Demonstrated gradient descent
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Successfully trained deep learning neural network
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
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Tom Martin <Link textColor="tertiary" href={"https://twitter.com/tpgmartin"}>@tpgmartin</Link>
          </Text>
        </Slide>
      </Deck>
    );
  }
}
