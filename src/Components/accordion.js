import Accordion from 'react-bootstrap/Accordion';

function Accordionn() {
  return (
    
   <div className='contt'> <Accordion defaultActiveKey="0">
    <p style={{fontSize:"1rem",marginBottom:"0rem"}}>FAQs</p>
      <Accordion.Item eventKey="0">
        <Accordion.Header>When should I apply?</Accordion.Header>
        <Accordion.Body>
        The internship program runs throughout the year to accommodate different academic calendars. Please apply four to five months before your planned starting date.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Do I need a professor's recommendation?</Accordion.Header>
        <Accordion.Body>
        Recommendations are not required. References, however, are required (professional or academic, regarding your background and skills.)
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What if the current projects do not interest me?  </Accordion.Header>
        <Accordion.Body>
        Please apply online and indicate your area of interest (i.e., marketing, data mining, and talent management).
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>How soon will I receive an interview call after I submit the application online?
</Accordion.Header>
        <Accordion.Body>
        If you are selected, and depending on how well your profile matches available projects, interview waiting times can range from two weeks to several months.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default Accordionn;