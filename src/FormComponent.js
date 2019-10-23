import React from "react";
import {red} from "@material-ui/core/colors";


export const FormComponent = ({formvalues}) => {

  return(
      <div>
          <form onSubmit={formvalues}>
              <input
                  type="text"
                  placeholder="FIRST NAM"
                  name="first"
                  ref="first"
                  style={{backgroundColor:red}}
              />
              <br/>
              <input type="text" placeholder="LAST NAME" name="last" ref="last"/>
              <br/>
              <input type="date" placeholder="BIRTHDAY" name="birthday" ref="birthday"/>
              <input type="text" placeholder="AGE" name="age" ref="age"/>
              <input type="text" placeholder="HOBBY" name="hobby" ref="hobby"/>
              <input type="submit" value="Submit"/>
          </form>
      </div>
  )
};

