import React            from 'react';

function Section({ children, fullWidth }) {


  if(fullWidth){
    return(
      <section>
          {children}
      </section>
    );
  }
  return (
    <section className="row center-xs">
        <div className="col-lg-6 col-md-12 col-sm-10 col-xs-12">
          <div className="row center-xs">
              {children}
          </div>
        </div>
    </section>
  )
}

export default Section;