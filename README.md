Portfolio piece.

Problem: Students falling behind on assignments. 
  Math lesson structure demands working in intensive small-groups while also providing scaffolding to non-small group students and monitoring work completion for learners at skill 
levels ranging from WELL BELOW AVERAGE to WELL ABOVE AVERAGE. Lesson structure consists of mini-lesson followed by independent practice and math workshop/stations, with the teacher expected 
to pull a small group during the independent practice and station time. Students will often finish at staggered times, and a tool was needed to facilitate monitoring work progress.

Proposed solution: A tracking tool to help students log their current progress and keep the teacher updated at a glance.

Process: 
  The app/site has 22 squares, with students' corresponding line order/alphabet order indicated by a number. When a student submits their work, they turn their paper in to the front
and press their square to indicate their current status. The squares cycle between three colors: red, blue, and green, indicating "not done with assignment", "done with current assignment,
but still working on missing work", and "currently finished all assignments", respectively. A timer is also built in so that students and teacher can pace themselves/the group. The timer
utilizes the most commonly used times in the developer's classroom.

How:
  The timer utilizes a JS function being called every 1 second to lower a time increment determined by the corresponding button press. The pause/resume buttons use a if/then loop on press
to determine if the interval should be cleared, or resumed from the time stored in a separate variable. The time textbox is then updated every interval. The status icons utilize simple
listeners to execute a background-color change to the next color in the sequence and remove the previous listener.

Reception:
  The webpage was a resounding success. Students were eager to press the buttons for both a "brain break" and feeling of pride seeing that they finished their work. The novelty ensured that
minimal reminders were needed to have students press their buttons-- only the initial introduction and a single "please remember to update your status" were needed. This made keeping
track of student work much easier, which led to a decline in graded work backlogs.

Changelog:
v.1.2.1: Added a "add student button"
v.1.2.2: Made the webpage nicer to look at.\

Future implementations:
  Currently, it is planned to add a feature that allows teachers/users to remove the number of students to accommodate classroom size. For additional suggestions, please contact Rudy :)
