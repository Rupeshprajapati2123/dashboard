import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
function DefaultExample() {
  return (
    <div className='cont'>
      <p style={{fontSize:"1rem",marginBottom:"0rem"}}>See Similar Jobs</p>
    <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">ABC  Enterprises</div>
          Frontend Developer
        </div>
        <Button variant="primary" size="sm">Apply Now</Button>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Shouko financials</div>
          Full Stack Developer
        </div>
        <Button variant="primary" size="sm">Apply Now</Button>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">JM Finance</div>
          Full Stack Intern
        </div>
        <Button variant="primary" size="sm">Apply Now</Button>
      </ListGroup.Item>
    </ListGroup>
    </div>
  );
}

export default DefaultExample;