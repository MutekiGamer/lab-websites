export const constructionAgent = {
  title: "Walkscribe · From a site finding to the next action",
  description: "Follow a blocked exit recorded in Take Notes during an inspection walkthrough. Walkscribe connects the note and photo evidence to follow-up, field guidance, and human review.",
  website: "https://settivishal.github.io/innovate-landing/",
  team: [
    { name: "Songzi Wu", role: "Tech Lead" },
    { name: "Vishal Setti", role: "Developer" },
    { name: "Gavin Sawall", role: "Business Development" },
    { name: "Mengjun Wang", role: "Business Development" },
  ],
  cases: [
    {
      id: "capture", number: "01", label: "Capture & confirm", title: "Record the issue during the walkthrough.",
      description: "Use Take Notes during the inspection to record the blocked exit with Kira, Walkscribe’s AI assistant. Keep the photo with the note, then review the finding and confirm its priority.",
      takeaway: "The inspector confirms the finding.",
      records: [{ label: "Finding", value: "Blocked exit" }, { label: "Priority", value: "High · confirmed" }, { label: "Evidence", value: "Photo retained" }],
    },
    {
      id: "coordinate", number: "02", label: "Coordinate", title: "Give the next step an owner.",
      description: "Review a proposed owner and follow-up message, then arrange a recheck. The same finding carries its photo, priority, and responsibility into coordination.",
      takeaway: "Messages are reviewed before sending.",
      records: [{ label: "Owner", value: "Joseph Wu" }, { label: "Next action", value: "Entry recheck" }, { label: "Status", value: "Open" }],
    },
    {
      id: "review", number: "03", label: "Keep it open for review", title: "The work still needs to be verified.",
      description: "The inspector confirms the issue, an owner coordinates the response, and a worker carries out the task. A reviewer verifies the work before records and plans are updated.",
      takeaway: "The finding stays open until the work is verified.",
      records: [{ label: "Finding", value: "Confirmed" }, { label: "Work", value: "Pending" }, { label: "Review", value: "Pending" }],
    },
  ],
  guidance: [
    { id: "on-screen", label: "On screen", title: "Keep the reference with the task.", description: "Bring up the relevant drawing, detail, and instructions where the work is being discussed." },
    { id: "at-workface", label: "At the workface", title: "Put the guidance where the work happens.", description: "The demonstration extends task guidance to a robot-mounted projector, displaying a connection detail at the work location." },
  ],
  scenes: [
    { seconds: 18, time: "0:18", title: "Prepare" },
    { seconds: 54, time: "0:54", title: "Inspect" },
    { seconds: 102, time: "1:42", title: "Coordinate" },
    { seconds: 138, time: "2:18", title: "Guide" },
    { seconds: 210, time: "3:30", title: "Review" },
    { seconds: 246, time: "4:06", title: "Devices" },
  ],
};
