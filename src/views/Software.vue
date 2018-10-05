<template>
    <div class="bg-grey-lighter">
        <div class="container mx-auto px-4 py-4">
            <h1 class="font-light">Queuing Manager</h1>
            <p class="mt-12 mb-12">We use <code>Slurm</code> from queuing</p>

            <h2 class="font-light mb-12">List of Queues</h2>
            <table class="mx-auto bg-grey-light border-2 border-solid border-gray-dark">
                <col width="50%">
                <col width="50%">

                <tr class="w-1/2">
                    <th class="p-4  border-2 border-solid border-grey-dark">Queue Information</th>
                    <th class="p-4  border-2 border-solid border-grey-dark">Details</th>
                </tr>
                <tr v-for="queue in queues" :key="queue.name" class="border-1 w-1/2 ">
                    <td class="p-12  border-2 border-solid border-grey-dark">{{ queue.info}}</td>
                    <td class="p-12 full-width  border-2 border-solid border-grey-dark">
                        Name of Queue = <span class="font-bold">{{ queue.name }}</span> <br>
                        No of Nodes = <span class="font-bold">{{queue.node_count}}</span> <br>
                        No of Processors = <span class="font-bold">{{ queue.x86_processors}}</span> <br>
                        Name of Node = <span class="font-bold">{{queue.name_of_node}}</span> <br>
                        Wall Time = <span class="font-bold">{{ queue.wall_time }}</span> <br>
                        Max Job = <span class="font-bold">{{ queue.max_job }}</span>
                    </td>
                </tr>
            </table>

            <h2 class="font-light mt-12">Slurm Configuration Generator</h2>
            <p class="m-4">Everybody is requested to use following code generator for generating slurm configs</p>

            <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-md md:mx-auto ">
                <div class="field-group mb-4 ">
                    <label class="field-label" for="path">Path</label>
                    <input class="field" type="text" id="path" v-model="path">
                </div>

                <div class="field-group mb-4 ">
                    <label class="field-label" for="job_name">Job Name</label>
                    <input class="field" type="text" id="job_name" v-model="job_name">
                </div>

                <div class="field-group mb-4 ">
                    <label class="field-label" for="number_of_nodes">Number of Nodes</label>
                    <input class="field" type="number" id="number_of_nodes" v-model="node_count">
                </div>

                <div class="field-group mb-4 ">
                    <label class="field-label" for="task_per_node">Task Per Nodes</label>
                    <input class="field" type="number" id="task_per_node" v-model="task_per_node">
                </div>

                <div class="field-group mb-4 ">
                    <label class="field-label" for="queue_name">Name of Queue</label>
                    <input class="field" type="text" id="queue_name" v-model="queue_name">
                </div>

            </div>

            <h3 class="font-light my-8">Generated Config</h3>
<pre class="bg-black text-white  py-8 px-4">
#!/bin/bash
#SBATCH --job-name={{ job_name }}
#SBATCH --nodes={{ node_count }}
#SBATCH --ntasks-per-node={{ task_per_node}}
#SBATCH --error=myjob.%J.err
#SBATCH --output=myjob.%J.out
#SBATCH --partition={{queue_name}} #SBATCH -v

cd ~/[your-path]
MACHINEFILE=machinefile
scontrol show hostname $SLURM_JOB_NODELIST > $MACHINEFILE
{{path}} -batch -np 1 -machinefile $MACHINEFILE -rsh /usr/bin/ssh ~/{{ path }}/input-file
</pre>
        </div>
    </div>
</template>

<script>
export default {
  name: "Software",
  data: () => ({
    queues: [
      {
        info: "For Serial Jobs that work serially ",
        name: "serial",
        node_count: 10,
        x86_processors: 10,
        name_of_node: "node(1,2,3,4,5,6)",
        wall_time: "12:00:00 Hour",
        max_job: "2 Per User"
      },
      {
        info:
          "For Physics department. It is mainly used by physics student for various simulations etc.",
        name: "physics",
        node_count: 20,
        x86_processors: 20,
        name_of_node: "node(1,2,3,4,5,6)",
        wall_time: "12:00:00 Hour",
        max_job: "5 Per User"
      },
      {
        info:
          "For Computer department. It is mainly used by computer student for machine learning, data analysis, data mining and other various purpose.",
        name: "computer",
        node_count: 30,
        x86_processors: 30,
        name_of_node: "node(1,2,3,4,5,6)",
        wall_time: "12:00:00 Hour",
        max_job: "5 Per User"
      },
      {
        info:
          "For Environment related stuff like weather forecasting. It is also used for fluid flow etc..",
        name: "environmnet",
        node_count: 40,
        x86_processors: 40,
        name_of_node: "node(1,2,3,4,5,6)",
        wall_time: "12:00:00 Hour",
        max_job: "5 Per User"
      }
    ],
    job_name: "",
    node_count: 0,
    task_per_node: 0,
    path: "",
    queue_name: ""
  })
};
</script>

<style scoped>
.field {
  @apply .border .py-2 .px-3 .text-grey-darkest;
}

.field-label {
  @apply .text-lg .text-grey-darkest .mb-2;
}

.field-group {
  @apply .flex .flex-col;
}
</style>
