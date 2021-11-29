<template>
    <div class="card">
        <div class="card__layout-element">
          <div class="card__circle card__circle__left-circle"></div>
        </div>
        <div class="card__quantity">
          Admit One
        </div>
        <div class="card__destination">
          <div class="card__destination__local">
            {{ tripCard.local }}
          </div>
          <div class="card__destination__named-to">
            To {{ tripCard.namedTo }}
          </div>
          <div class="card__destination__date">
            <div class="weekday">
              {{ tripCard.weekday }}
            </div>
            <span>{{ tripCard.day }}</span> {{ tripCard.month }} {{ tripCard.year }}
          </div>
          <div class="address">
            {{ tripCard.address }} - {{ tripCard.state }} - {{ tripCard.country }}
          </div>
        </div>
        <div class="card__layout-element">
          <div class="card__circle card__circle__right-circle"></div>
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
.card {
  width: 100%;
  display:flex;
  flex-direction: row;
  background: var(--light-green);
  border: solid 1px var(--white);
  border-radius: 8px;
  color: var(--green);
  margin-top: 50px;
  height: 230px;
  &__layout-element {
    width: 5%;
    height: 100%;
    display:flex;
    align-items: center;
  }
  &__circle {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      -moz-border-radius: 50%;
      -webkit-border-radius: 50%;
      position: absolute;
      align-content: center;
      &__left-circle {
        background: linear-gradient(180deg, var(--dark-blue) 50%, var(--white) 50%);
        left: 10px;
      }
      &__right-circle {
        background: linear-gradient(180deg, var(--dark-blue) 50%, var(--white) 50%);
      }
  }
  &__quantity{
    border-left: dashed 1px var(--green);
    width: 10%;
    text-align:center;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    padding-right: 20px;
    font-size: var(--font-14);
  }
  &__destination {
    width: 70%;
    padding: 16px 16px 16px 29px;
    display: flex;
    flex-direction: column;
    font-size: var(--font-14);
    &__local {
      font-size: var(--font-32);
      font-weight: var(--font-700);
    }
    &__named-to{
      padding-bottom: 15px;
    }
    &__date {
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
</style>
