<template>
    <div id="card">
        <div class="quantity">
          Admit One
        </div>
        <div class="destination">
          <div class="local">
            {{ tripCard.local }}
          </div>
          <div class="named-to">
            To {{ tripCard.namedTo }}
          </div>
          <div class="date">
            <div class="weekday">
              {{ tripCard.weekday }}
            </div>
            <span>{{ tripCard.day }}</span> {{ tripCard.month }} {{ tripCard.year }}
          </div>
          <div class="address">
            {{ tripCard.address }} - {{ tripCard.state }} - {{ tripCard.country }}
          </div>
        </div>
      </div>
</template>

<script>
    export default {
        data(){
            return {
                tripCard: {
                    local: "Eiffel Tower",
                    namedTo: "Laura",
                    weekday: "Thursday",
                    day: "30",
                    month: "november",
                    year: "2021",
                    address: "2-5 Rue de la Jussienne",
                    state: "Paris",
                    country: "France"
                }
            }
        }
    }
</script>

<style lang="scss">
#trip-information {
    background: linear-gradient(180deg, var(--dark-blue) 320px, var(--white) 320px);
    color: var(--white);
    margin-top: -1px;
    padding-bottom: 130px;
    h1{
      margin-bottom: 0;
    }
    p {
      font-size: var(--font-18);
    }
    #card{
      width: 100%;
      display:flex;
      flex-direction: row;
      background: var(--light-green);
      border: solid 1px var(--white);
      border-radius: 8px;
      color: var(--green);
      margin-top: 50px;
      height: 230px;
        .quantity{
        border-left: dashed 1px var(--green);
        width: 10%;
        text-align:center;
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        padding-right: 20px;
        font-size: var(--font-14);
        &::before{
          content: '';
          width: 32px;
          height: 32px;
          border-radius: 50%;
          -moz-border-radius: 50%;
          -webkit-border-radius: 50%;
          background: linear-gradient(0deg, var(--dark-blue) 50%, var(--white) 50%);
          position: absolute;
          left: 38px;
          top: 104px;
        }
      }
      .destination {
        width: 70%;
        padding: 16px 16px 16px 29px;
        display: flex;
        flex-direction: column;
        font-size: var(--font-14);
        &::before{
          content: '';
          width: 32px;
          height: 32px;
          border-radius: 50%;
          -moz-border-radius: 50%;
          -webkit-border-radius: 50%;
          background: linear-gradient(180deg, var(--dark-blue) 50%, var(--white) 50%);
          position: absolute;
          right: 15px;
          bottom: 206px;
        }
        .local {
          font-size: var(--font-32);
          font-weight: var(--font-700);
        }
        .named-to{
          padding-bottom: 15px;
        }
        .date {
          font-size: var(--font-16);
          font-weight: var(--font-700);
          padding-top: 5px;
          padding-bottom: 25px;
          span {
            font-size: var(--font-32);
          }
        }
      }
    }
  }
</style>
