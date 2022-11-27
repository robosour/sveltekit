<script lang="ts">
    let type: string;
    $: author_array=input.split("\n");

    let print=""
    var input=""
    var output=''
    let selection: string;
    $: temp= input.split("\t")
    input=temp[3]
    $:  if(input.includes(";")){
        input =input.replace(' ;',';')
        input=input.replace('; ',';')
        input=input.replace(' ; ',';')
       
    }


    $: spaced = input.trim().split(" ");

    $: semi = input.split(";");
    $: comma = input.split(",");


    // jksdhkjs, shd; sjkhks sdjkhsdk
    // $: spli = input.split(" ");

    function checkOne(text: string) {
        let semi_comma = text.split(",");
        let semi_space =text.split(" ")
        
        let first = semi_comma[0];
        if (semi_comma.length == 2) {
            //semi does contain comma
            if (semi_comma[1].endsWith(",")) {
                input=text
     
                // alert("good");
            }else if (text.includes(" ,")) {
                input=  input.replace(" ,", ", ");
                // alert("replaced ' ,' with ', ' :" + input);
            }
            else if(text.includes(",") && !text.includes(" ")){
                input=input.replace(",", ", ")

            }else if (first.startsWith(" ")) {
            // alert("remove the space/array[0]");

            input=text.trim()
        } 
            else{
               
            }
        } 
        else if(semi_comma.length==1 ){
            if(semi_space.length ==1){
                return "perfect"
            }
            else{
                input=input.replace(" ", ", ")
                // alert("needs test case")

            }


        } 
        
        else {
            //semi doesn't contain a comma
            input=input.replace(' ', ', ')
            // alert("no comma");
        }
        return input;
    }

    function checkAll() {


        input=input.replace(/  +/g, ' ');
        if (comma.length == 2 && spaced.length == 2 && !input.includes(" ,")) {

            alert("perfect")
            return;
            // good+=input;
            // alert("single");
        } else if (input.includes(";")) {
            alert("; =split" + semi.length);
            semi.forEach(function (item) {
                input.replace(item, checkOne(item))
                // single+=checkOne(item)+"\n";
            });
            // good=single

        }

        else{
            input=(checkOne(input))
            // alert("needs test case")
            // return
        }
        // output=input
        output=input.replace(/  +/g, ' ');

        alert("fixed = " + output)
    }

    function simplify(){
         print = temp[2]
        alert(print)

    }
</script>
<main class="mt-10">
    
    <label for="textarea">What type of spaced do you want to transform?</label>
    <select
        type="select"
        bind:value={type}
        class="form-select px-4 py-3 rounded w-auto"
    >
        <option value="Author">Author</option>
        <option value="Keyword">Keyword</option>
    </select>
    
    <label for="textarea">Paste the spaced:</label>
    <textarea  bind:value={input} class="form-textarea px-4 py-3 rounded w-xl" />
    <div class="grid grid-cols-2 p-10">
        <div>
            <p>{type}</p>
        </div>
        <div>
            <button on:click={simplify} class="btn btn-ghost-primary">Simplify</button>
        </div>
        <div>
            <p>
                <select
                    bind:value={selection}
                    class="form-select  px-4 py-3 rounded-full"
                    on:click={checkAll}
                >
                    <option value="kj">Remove Valid Authors</option>
                    <option value="bzjhbds" />
                    <option value="sdhkjbk">klsjks</option>
                </select>
            </p>
        </div>
        <div>
            <p>{output} spaced={spaced.length} semi={semi.length} comma={comma.length} </p>
        </div>
        <div>
            {print}
            <br>
            {#each author_array as author}
                {author} <br>
                 <!-- content here -->
            {/each}
            <!-- <p>{spli.length} </p> -->
        </div>
    </div>
</main>

<!-- clear()    button -->
<!-- Save state button -->
<!-- copy spaced button -->