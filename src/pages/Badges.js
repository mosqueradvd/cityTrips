import React from "react";
import { Link } from "react-router-dom";

import "./styles/Badges.css";
import confLogo from "../images/cityTrips.png";
import BadgesList from "../components/BadgesList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import MiniLoader from "../components/MiniLoader";

import api from "../api";

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  };

  componentDidMount() {
    this.fetchData();

    this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges___container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data} />
              {this.state.loading && <MiniLoader />}
            </div>
          </div>

          <div className="Badge__buttons">
            <Link to="/badges/new" className="btn btn-primary NewBtn">
              New Badge
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;

// constructor(props) {
//   super(props);
//   console.log("1. constructor()");
//   this.state = {
//     data: []
//   };
// }

// componentDidMount() {
//   console.log("3. comoponentDidMount()");

//   this.timeoutId = setTimeout(() => {
//     this.setState({
//       data: [

//       ]
//     });
//   }, 3000);
// }

// componentDidUpdate(prevProps, prevState) {
//   console.log("5. componentDidUpdate()");
//   console.log({
//     prevProps: prevProps,
//     prevState: prevState
//   });

//   console.log({
//     props: this.props,
//     state: this.state
//   });
// }

// componentWillUnmount() {
//   console.log("6. componentWillUnmount()");
//   clearTimeout(this.timeoutId);
// }
