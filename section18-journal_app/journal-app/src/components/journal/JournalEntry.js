import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            'url("https://s3-us-west-2.amazonaws.com/melingoimages/Images/91138.jpg")',
        }}
      ></div>

      <div className="journal__entry-body">
        <p className="journal__entry-title">It's a new day</p>
        <p className="journal__entry-content">
          Why use lorem ipsum if you can write anything
        </p>
      </div>

      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>2B</h4>
      </div>
    </div>
  );
};
