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
  andChart: require("../assets/and_chart.png"),
  andChartWithBoundary: require("../assets/and_chart_with_boundary.png"),
  errorFunction: require("../assets/error_function.png"),
  errorFunctionWithDerivative: require("../assets/error_function_with_derivative.png"),
  hiddenLayerHighlighted: require("../assets/hidden_layer_highlighted.png"),
  linearExampleNoHiddenLayer: require("../assets/linear_example_no_hidden_layer.png"),
  linearExampleWithHiddenLayer: require("../assets/linear_example_with_hidden_layer.png"),
  multipleInputsToSingleOutput: require("../assets/multiple_inputs_to_single_output.png"),
  multipleInputsToSingleOutputWithWeights: require("../assets/multiple_inputs_to_single_output_with_weights.png"),
  singleInputToSingleOutput: require("../assets/single_input_to_single_output.png"),
  threeLayerNetwork: require("../assets/three_layer_network.png"),
  xorChart: require("../assets/xor_chart.png")
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
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Investigate a <br/> learning problem
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Determine correct output of XOR gate
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Build feed-forward network
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Gonna get deep
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Implement <br/> gradient descent
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Work through <br/> three stages:
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            1. Forward <br/> propagation
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            2. Error calculation
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            3. Backward <br/> propagation
          </Text>
        </Slide>
        <Slide bgColor="tertiary">
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
            Introduction
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Web developer <Link textColor="tertiary" href={"https://twitter.com/OpenTableTechUK"}>@OpenTable</Link>
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            My machine learning jounery started in 2016
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            "Learn, do, learn, teach"
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Why the hype?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Better performance than traditional ML approaches
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Generic solutions
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            What are we trying to acheive with a neural network?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Learn how to determine output for given input
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Supervised learning
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Training data
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Train by matching inputs to known outputs
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Move to test case
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            "Learning"?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Minimise network error
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Adjust network in response to error calculation
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Find correlation between inputs
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            *Input nodes are <br/> not independent
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Correlation is where <br/> the magic happens
          </Text>
        </Slide>
        <Slide bgColor="tertiary">
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
            Setup
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Example we are <br/> going to follow
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            XOR gate
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
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Input will be <br/> arrays of length 2
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Output value <br/> will be 1 or 0
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Network is made of layers and nodes
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Nodes are our "neurons"
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Layer is set of nodes with common inputs
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Input layer will <br/> be two nodes
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Output layer will <br/> be one node
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.multipleInputsToSingleOutput} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            How do we get output?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.multipleInputsToSingleOutput} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Weight <br/> == <br/> strength of relationship
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            For given input <br/> node find output
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.multipleInputsToSingleOutput}/>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            output = input * weight
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            General case of <br/> multiple inputs
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Get weighted sum of inputs to that node
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.multipleInputsToSingleOutputWithWeights}/>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            O = 0.4 * A + 0.6 * B
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            O = 0.4 * A + 0.6 * B
          </Text>
          <Text margin="10px 0 0" textColor="secondary" size={1} bold>
            Remember this!
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            On layer-by-layer basis
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Use dot product
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Product of given <br/> layer node values <br/> with weights
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            numjs does this for us
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            All examples will be single input node to single output node
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Replace "multiplication" with "dot product"
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Know where output comes from ...
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Where do weights <br/> come from?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Randomly pick weights
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Limiting factor: how quickly network learns
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Sufficient to use <br/> normal distribution
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            mean = 0 <br/> standard deviation = 1
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Also choose weights between -1 and +1
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Mostly just to <br/> make things simple
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Everything comes <br/> back to how <br/> quickly network learns
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
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Have a neural network
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            We need to go deeper
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
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
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            This can be solved with a linear neural network
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.multipleInputsToSingleOutput} />
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.andChart} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Output is <br/> linearly separable
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.andChartWithBoundary} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Condition for linear neural network
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Back to XOR
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Requires deep learning neural network
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Output not <br/> linearly separable
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.xorChart} />
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.multipleInputsToSingleOutput} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Something's missing
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Need nonlinear behaviour
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Add hidden layer
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Hidden layer creates intermediate correlation
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Correlation <br/> == <br/> some combination <br/> of nodes that <br/> produce an output
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Choose number of layers and nodes that perform best
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Final network will have hidden layer of 3 nodes
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.threeLayerNetwork} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
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
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            H = 0.4 * A + 0.6 * B
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.linearExampleWithHiddenLayer} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            O = 0.5 * (0.4 * A + 0.6 * B)
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            O = 0.2 * A + 0.3 * B
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.linearExampleNoHiddenLayer} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            How to solve this?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Activation function introduces nonlinearities
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Determines if node <br/> is "on" or "off"
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Puts the "neural" <br/> in neural networks
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            relu function
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            if input &#60; 0 then return 0
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
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
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Have deep learning neural network!
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Can implement <br/> gradient descent
          </Text>
        </Slide>
        <Slide bgColor="tertiary">
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
            Forward propagation
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Iteratively find output for given input
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Layer by layer, <br/> node by node
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            At each layer find dot product of weights with input to that layer
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            At hidden layer, <br/> plug through <br/> activation function
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
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Network generates output
          </Text>
        </Slide>
        <Slide bgColor="tertiary">
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
            Error calculation
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Why do we <br/> measure error?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            How do we know <br/> network output <br/> is any good?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Want network to <br/> learn training set
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Learning is just reducing the error
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            How do we <br/> quantify error?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Many different ways <br/> to quantify this
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Use mean squared error
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            error = (output - target) ** 2
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            error &ge; 0
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            The lower the <br/> value the better
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Easy to track
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Convergence guaranteed*
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
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Error tells us how <br/> well we're doing
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            How do we <br/> improve this?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            What can we do?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Can only adjust weights
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Determine amount to adjust weights in previous layer
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Backpropagation is a process of error attribution
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Work backwards through the network
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Determine which weight and how much
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Weight contributed to final error
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Gradient descent
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Want to minimise network error
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Make link between error and weights explicit
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Simplist case of single hidden layer node to output
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            error = (output - target) ** 2
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            output = input * weight
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            error = ((input * weight) - target) ** 2
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            error ~ weight ** 2
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.errorFunction} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Goal weight is <br/> just minimum
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            For given change <br/> in weight
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            What is change <br/> in error?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Gradient descent <br/> is greedy
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Choose change in weight that changes error most
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Find the derivative
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.errorFunctionWithDerivative} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Derivative gives relationship <br/> between variables
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            derivative ~ input * (output - target)
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.errorFunctionWithDerivative} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            ∆weight = input * (output - target)
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            ∆error = ∆weight * (input * (output - target))
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Change to weight is always negative of derivative
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            weight = weight - ∆weight
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            weight -= input * (output - target)
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Do this iteratively until convergening to minimum
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Weight update always <br/> negative of derivative
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.errorFunction} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Convergence to minimum is guaranteed-ish
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Goal weight is global minimum*
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            *at least for our error function
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            This gives us output layer delta
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Can update weights connecting hidden layer and output layer
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Update to other weights is the same
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Complicated by activation function
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.threeLayerNetwork} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Find derivative of output function at hidden layer node
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Change to hidden layer node complicated by activation function
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Found outputDelta was just derivative of output function
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            ... some calculus later ...
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            hiddenDelta = outputDelta * weight_h_o * reluDeriv(input * weight_i_h)
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            How to think about reluDeriv?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Said backward propagation is about error attribution
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            relu gave us a weight &ge; 0
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            So either weight did or didn't contribute to error
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            "did" == 1, "didn't" == 0
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            hiddenDelta = outputDelta * weight_h_o
            or
            hiddenDelta = 0
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Finally update weights
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            weightDelta = input * delta
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Not done yet
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Possible divergence of weight updates
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Weight update scales with input value
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            derivative ~ input * (output - target)
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Could be very large, even for a small error
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.errorFunction} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Learning rate, alpha
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            weight -= alpha * input * (output - target)
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Just choose alpha that works for us
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
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Matched network to learning problem
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Created a deep learning neural network layers
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Justified choices
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            Demonstrated gradient descent
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
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
            Join at sli.do with <Link textColor="tertiary" href={"https://app.sli.do/?search=BrownBag"}>#BrownBag</Link>
          </Text>
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
