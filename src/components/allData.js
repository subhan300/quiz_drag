

var allData = [
  {
  question: "Drag and drop these network layers to their right positions",
  answers: {
    layer1: {
      id: 'layer1',
      name: 'Layer 1',
      image: '',
      droppedItem: null

    },
    layer2: {
      id: 'layer2',
      name: 'Layer 2',
      image: '',
      droppedItem: null

    },
    layer3: {
      id: 'layer3',
      name: 'Layer 3',
      image: '',
      droppedItem: null
    }
  },
  keys: {
    applicationLayer : {
      id: 'applicationLayer',
      name: 'Application Layer',
      image: '',
      correctAnswer: 'layer1',
      status: 'active'
    },
    physicalLayer: {
      id: 'physicalLayer',
      name: 'Physical Layer',
      image: '',
      correctAnswer: 'layer2',
      status: 'active'
    },
    networkLayer: {
      id: 'networkLayer',
      name: 'Network Layer',
      image: '',
      correctAnswer: 'layer3',
      status: 'active'
    }
  }
}]


export default allData;

