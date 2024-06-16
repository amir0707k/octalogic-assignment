export function generateEnrollmentData(numEntries) {
    const names = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown", "Charlie Davis"];
    const courses = ["Percussion", "Violin", "Guitar", "Piano", "Vocal"];
    const fees = ["$120", "$150", "$130", "$140", "$125"];
    
    const enrollments = [];
  
    for (let i = 0; i < numEntries; i++) {
      const entry = {
        "Enr. No": (Math.floor(Math.random() * 9000000) + 1000000).toString(),
        "S. Name": names[Math.floor(Math.random() * names.length)],
        "C. Name": courses[Math.floor(Math.random() * courses.length)],
        "Fees": fees[Math.floor(Math.random() * fees.length)],
        "Enr. Date": new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0]
      };
      enrollments.push(entry);
    }
  
    return enrollments;
  }
  
  console.log(generateEnrollmentData(10));
  