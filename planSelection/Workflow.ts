import {
  onPlanSelectionEvent,
  WorkflowSettings,
  WorkflowTrigger,
  denyPlanSelection,
} from "@kinde/infrastructure";

// The setting for this workflow
export const workflowSettings: WorkflowSettings = {
  id: "onUserPlanSelection",
  trigger: WorkflowTrigger.UserPlanSelection,
  name: "Plan change",
  failurePolicy: {
    action: "stop",
  },
  bindings: {
    "kinde.plan": {},
  },
};

// This workflow demonstrates denying a plan change

// The workflow code to be executed when the event is triggered
export default async function Workflow(event: onPlanSelectionEvent) {
  console.log({event});
  //    some code here to check if user can perform the plan change
  denyPlanSelection(
    "To move from Professional to the Free plan you first need to:",
    [
      "Reduce your team size to 3 members or less",
      "Delete projects that are not in eligible for the Free plan",
    ]
  );
}
