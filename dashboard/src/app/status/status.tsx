import clsx from "clsx";
import { octokit } from "../oktokit";
import {
  CheckIcon,
  HandThumbUpIcon,
  UserIcon,
} from "@heroicons/react/20/solid";

type Props = {
  owner: string;
  repo: string;
  workflow_id: string;
};

export const Status = async ({ owner, repo, workflow_id }: Props) => {
  const repoData = await octokit.repos.get({
    owner,
    repo,
  });

  const workflow = await octokit.rest.actions.getWorkflow({
    owner,
    repo,
    workflow_id,
  });

  const status = await octokit.actions.listWorkflowRuns({
    owner,
    repo,
    per_page: 3,
    workflow_id,
  });

  return (
    <div className="col-span-1  divide-gray-200 rounded-lg bg-white shadow p-4">
      <div className="mb-4 flex justify-between">
        <h1 className="font-bold">{repoData.data.full_name}</h1>
        <p className="text-sm">{workflow.data.name}</p>
      </div>
      <div className="flow-root max-w-2xl">
        <ul role="list" className="-mb-4">
          {status.data.workflow_runs.map((workflow, index) => (
            <li key={workflow.id}>
              <div className="relative pb-4">
                <div className="relative flex space-x-3">
                  <div>
                    <span
                      className={clsx(
                        "bg-green-500 h-6 w-6 rounded-full flex items-center justify-center ring-6 ring-white"
                      )}
                    >
                      <CheckIcon
                        className="h-4 w-4 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-0.5">
                    <div>
                      <p className="text-sm text-gray-500">
                        {workflow.display_title}
                        <span className="font-medium text-gray-900">
                          {workflow.triggering_actor?.name}
                        </span>
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      <time dateTime={workflow.run_started_at}>
                        {new Date(
                          workflow.run_started_at ?? ""
                        ).toLocaleString()}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
