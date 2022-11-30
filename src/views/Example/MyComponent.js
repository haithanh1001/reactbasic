import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: 1, title: "Developers", salary: "500" },
      { id: 2, title: "Tester", salary: "400" },
      { id: 3, title: "Project Manager", salary: "1000" },
    ],
  };
  addJob = (job) => {
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };

  deleteJob = (job) => {
    this.setState({
      arrJobs: [
        ...this.state.arrJobs.filter((item) => {
          return item.id !== job.id;
        }),
      ],
    });
  };
  render() {
    return (
      <>
        <AddComponent addJob={this.addJob} />
        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteJob={this.deleteJob}
        />
      </>
    );
  }
}

export default MyComponent;
