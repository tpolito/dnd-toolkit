import React from 'react';

const Suffocating = () => {
  return (
    <div className="card">
      <div class="card blue darken-1">
        <div class="card-content white-text">
          <span class="card-title">Suffocating</span>
          <hr />
          <p>
            A creature can hold its breath for a number of minutes equal to 1 +
            its Constitution modifier (minimum of 30 seconds). When a creature
            runs out of breath or is choking, it can survive for a number of
            rounds equal to its Constitution modifier (minimum of 1 round). At
            the start, of its next turn, its drops to 0 hit points and is dying,
            and it can't regain hit points or be stabilized until it can breath
            again.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Suffocating;
