import React from 'react';
import ComplaintForm from './ComplaintForm';
import SubmitHeader from './SubmitHeader';

function SubmitComplaint() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <SubmitHeader />
      <ComplaintForm />
    </div>
  );
}

export default SubmitComplaint;