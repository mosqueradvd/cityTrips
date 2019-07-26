import React from "react";
import IcoMoon from "react-icomoon";
import { Link } from "react-router-dom";

import Gravatar from "./Gravatar";

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter(badges => {
      return `${badges.firstName} ${badges.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

export default function BadgesList(props) {
  const badges = props.badges;

  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Find your Badge!</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>No Badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new Badge
        </Link>
      </div>
    );
  }

  return (
    <ul className="list-unstyled">
      <div className="form-group">
        <label className="centerLabel">Find your Badge!</label>
        <input
          placeholder="Find Your Badge!"
          type="text"
          className="form-control centerLabel"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>

      {filteredBadges.map(badge => {
        return (
          <Link
            className="text-reset text-decoration-none"
            to={`/badges/${badge.id}`}
          >
            <li key={badge.id}>
              <div className="Badge__box d-flex align-items-center">
                <Gravatar
                  className="Badge__avatar img Badge__fix"
                  email={badge.email}
                  alt="Avatar"
                />
                <div className="col-9">
                  <p className="lead font-weight-bold p">
                    {badge.firstName} {badge.lastName}
                  </p>
                  <p className="font-weight-light p">{badge.jobTitle}</p>
                  <p className="text-primary font-weight-bold p">
                    <IcoMoon className="icon-twitter" icon="twitter" />@{" "}
                    {badge.twitter}
                  </p>
                </div>
              </div>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}
